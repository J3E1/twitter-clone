import { create } from 'zustand';

interface LoginModalStore {
	isOpen: boolean;
	regMode: boolean;
	onOpen: () => void;
	onClose: () => void;
	toggleMode: () => void;
	setMode: (isRegMode: boolean) => void;
}

const useAuthModal = create<LoginModalStore>(set => ({
	isOpen: true,
	regMode: true,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	toggleMode: () => set(state => ({ regMode: !state.regMode })),
	setMode: isRegMode => set({ regMode: isRegMode }),
}));

export default useAuthModal;
