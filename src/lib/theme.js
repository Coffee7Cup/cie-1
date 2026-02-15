import { writable } from 'svelte/store';

export const theme = writable('light');

if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') || 'light';
    theme.set(savedTheme);

    theme.subscribe((value) => {
        localStorage.setItem('theme', value);
        if (value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
}

export function toggleTheme() {
    theme.update((t) => (t === 'light' ? 'dark' : 'light'));
}
