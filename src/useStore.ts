import create from "zustand";

interface Store {
  num: number;
  setNum: (c: number) => void;
}

const useStore = create<Store>((set, get) => ({
  num: 0, // 전역 state
  setNum: (num) => set({ num }), // 전역 function
}));

export default useStore;
