'use client';

import { proxy, useSnapshot } from "valtio"

const state = proxy<{
    username: string;
    password: string;
    loading: boolean;
    disabled: boolean;
}>({
    username: '',
    password: '',
    loading: false,
    get disabled() {
        return this.loading || !this.username || !this.password;
    },
});

export default function LoginForm() {
    const snap = useSnapshot(state);

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        state.loading = true;

        setTimeout(() => state.loading = false, 3500);
    }

    return (
        <form className="flex flex-col gap-4 bg-white rounded-2xl p-8 lg:min-w-xs" onSubmit={submit}>
            <label className="text-base font-medium text-gray-700 dark:text-gray-300">
                Username
                <input
                    type="text"
                    name="username"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    required
                    value={snap.username}
                    onChange={(e) => state.username = e.target.value.trim()}
                />
            </label>
            <label className="text-base font-medium text-gray-700 dark:text-gray-300">
                Password
                <input
                    type="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    required
                    value={snap.password}
                    onChange={(e) => state.password = e.target.value}
                />
            </label>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-200"
                disabled={snap.disabled}
            >
                Login
            </button>
        </form>
    )
}