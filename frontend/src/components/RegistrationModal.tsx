import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActor } from "@/hooks/useActor";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = "idle" | "loading" | "success" | "error";

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    if (formState === "loading") return;
    setName("");
    setPhone("");
    setFormState("idle");
    setErrorMessage("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setFormState("error");
      setErrorMessage("Naam daalna zaroori hai.");
      return;
    }

    const cleanPhone = phone.trim();
    if (!cleanPhone) {
      setFormState("error");
      setErrorMessage("Phone number daalna zaroori hai.");
      return;
    }

    if (!/^\d{8}$/.test(cleanPhone)) {
      setFormState("error");
      setErrorMessage("Phone number mein exactly 8 digits hone chahiye.");
      return;
    }

    if (!actor) {
      setFormState("error");
      setErrorMessage("Backend se connection nahi ho pa raha. Thodi der baad try karein.");
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      await actor.register(name.trim(), cleanPhone);
      setFormState("success");
    } catch (err: unknown) {
      setFormState("error");
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.toLowerCase().includes("trap") || msg.toLowerCase().includes("phone")) {
        setErrorMessage("Yeh phone number pehle se registered hai ya galat format mein hai.");
      } else {
        setErrorMessage("Registration fail ho gayi. Dobara try karein.");
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <DialogContent className="sm:max-w-md bg-white border-2 border-tournament-red/20 rounded-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-black text-tournament-red uppercase tracking-wide text-center">
            🏆 Tournament Registration
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500 text-sm">
            Apna naam aur phone number daalein aur tournament join karein!
          </DialogDescription>
        </DialogHeader>

        {formState === "success" ? (
          <div className="flex flex-col items-center gap-4 py-6">
            <CheckCircle2 className="w-16 h-16 text-tournament-green" />
            <p className="font-display text-xl font-bold text-tournament-green text-center uppercase tracking-wide">
              Registration Successful! 🎉
            </p>
            <p className="text-gray-600 text-center text-sm">
              Aapka registration ho gaya hai. Tournament ke din taiyaar rehna!
            </p>
            <Button
              onClick={handleClose}
              className="mt-2 bg-tournament-green hover:bg-tournament-green/90 text-white font-bold px-8 py-2 rounded-xl"
            >
              Theek Hai!
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="reg-name" className="font-semibold text-gray-700">
                Naam <span className="text-tournament-red">*</span>
              </Label>
              <Input
                id="reg-name"
                type="text"
                placeholder="Apna poora naam likhein"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (formState === "error") setFormState("idle");
                }}
                disabled={formState === "loading"}
                className="border-gray-300 focus:border-tournament-red focus:ring-tournament-red/30 rounded-xl"
                autoComplete="name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="reg-phone" className="font-semibold text-gray-700">
                Phone Number <span className="text-tournament-red">*</span>
              </Label>
              <Input
                id="reg-phone"
                type="tel"
                placeholder="8 digit phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 8));
                  if (formState === "error") setFormState("idle");
                }}
                disabled={formState === "loading"}
                className="border-gray-300 focus:border-tournament-red focus:ring-tournament-red/30 rounded-xl"
                autoComplete="tel"
                maxLength={8}
              />
              <p className="text-xs text-gray-400">Sirf 8 digits daalna hai (e.g. 12345678)</p>
            </div>

            {formState === "error" && errorMessage && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <AlertCircle className="w-4 h-4 text-tournament-red flex-shrink-0" />
                <p className="text-sm text-tournament-red font-medium">{errorMessage}</p>
              </div>
            )}

            <DialogFooter className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={formState === "loading"}
                className="flex-1 rounded-xl border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={formState === "loading"}
                className="flex-1 bg-tournament-green hover:bg-tournament-green/90 text-white font-bold rounded-xl uppercase tracking-wide"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Register Now! 🎮"
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
