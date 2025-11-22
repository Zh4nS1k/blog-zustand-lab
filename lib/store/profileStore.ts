import { create } from "zustand";

export type UserRole = "student" | "developer" | "designer" | "manager";

export type Profile = {
  avatar: string;
  firstName: string;
  lastName: string;
  birthDate: string; // yyyy-mm-dd
  role: UserRole;
};

type ProfileState = {
  profile: Profile;
  updateProfile: (data: Partial<Profile>) => void;
};

export const useProfileStore = create<ProfileState>((set) => ({
  profile: {
    avatar: "https://i.pravatar.cc/150",
    firstName: "Zhanserik",
    lastName: "Zhanturin",
    birthDate: "2005-06-21",
    role: "developer",
  },

  updateProfile: (data) =>
    set((state) => ({
      profile: {
        ...state.profile,
        ...data,
      },
    })),
}));