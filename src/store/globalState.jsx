import { create } from "zustand";

export const useNavStore = create((set) => ({
  isMenuOpen: false, // Initial state

  // Toggle the menu's open/close state
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  // Open the menu
  openMenu: () => set({ isMenuOpen: true }),

  // Close the menu
  closeMenu: () => set({ isMenuOpen: false }), // Note: Correct method name
}));
