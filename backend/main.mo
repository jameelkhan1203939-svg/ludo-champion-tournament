import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  let registrations = List.empty<(Text, Text)>();

  public shared ({ caller }) func register(name : Text, phoneNumber : Text) : async () {
    if (phoneNumber.size() != 8) {
      Runtime.trap("Phone number must contain exactly 8 digits.");
    };

    registrations.add((name, phoneNumber));
  };

  public query ({ caller }) func getRegistrations() : async [(Text, Text)] {
    registrations.toArray();
  };
};
