import { writable } from 'svelte/store';

export type ToastType = 'success' | 'error' | 'info';
export type ToastPosition =
	| 'top-right'
	| 'top-center'
	| 'top-left'
	| 'bottom-right'
	| 'bottom-center'
	| 'bottom-left';

export interface Toast {
	id: number;
	message: string;
	type: ToastType;
	position: ToastPosition;
}

function createToastStore() {
	const { subscribe, update } = writable<Toast[]>([]);

	function addToast(
		message: string,
		type: ToastType = 'info',
		position: ToastPosition = 'top-center'
	) {
		const id = Date.now();
		update((toasts) => [...toasts, { id, message, type, position }]);

		// Auto-remove toast after 4 seconds
		setTimeout(() => removeToast(id), 4000);
	}

	function removeToast(id: number) {
		update((toasts) => toasts.filter((t) => t.id !== id));
	}

	return {
		subscribe,
		success: (msg: string, pos?: ToastPosition) => addToast(msg, 'success', pos),
		error: (msg: string, pos?: ToastPosition) => addToast(msg, 'error', pos),
		info: (msg: string, pos?: ToastPosition) => addToast(msg, 'info', pos),
		remove: removeToast
	};
}

export const toast = createToastStore();
