# Specification

## Summary
**Goal:** Enable player registration for the Ludo Champion Tournament by adding a backend registration system and a frontend modal form.

**Planned changes:**
- Add a `register(name: Text, phone: Text)` update method in the backend that stores registrations in stable memory and rejects duplicate phone numbers.
- Add a `getRegistrations()` query method in the backend that returns all registered entries.
- Replace the WhatsApp link in `RegisterButton.tsx` with a modal form that collects player name and phone number.
- Submit the modal form to the backend `register()` method and display a success or error message accordingly.
- Allow the modal to be closed without submitting.
- Retain the existing shimmer and animation styling on the Register Now button.

**User-visible outcome:** Clicking "Register Now!" opens a registration modal where players can enter their name and phone number. On submission, they see a success confirmation or an error message (e.g., for duplicate phone numbers), and the data is persisted on the backend.
