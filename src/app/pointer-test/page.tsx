import { FollowingPointerDemo } from "@/components/FollowingPointerDemo";

export default function PointerTestPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
            <div className="container mx-auto px-4">
                <h1 className="mb-12 text-center text-4xl font-bold text-white">
                    Following Pointer Demo
                </h1>
                <div className="flex justify-center">
                    <FollowingPointerDemo />
                </div>
                <p className="mt-8 text-center text-sm text-gray-400">
                    Hover over the card to see the following pointer effect
                </p>
            </div>
        </div>
    );
}
