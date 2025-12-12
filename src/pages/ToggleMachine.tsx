import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
import { Link } from "react-router-dom";

const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
});

function ToggleMachine() {
  const [state, send] = useMachine(toggleMachine);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <Link
          to="/"
          className="inline-block mb-4 text-blue-500 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-xl font-bold mb-8">XState Toggle Machine</h1>

        <div className="mb-6">
          <p className="text-xl mb-2">Current State:</p>
          <p className="text-2xl font-semibold text-blue-600">
            {String(state.value)}
          </p>
        </div>

        <button
          onClick={() => send({ type: "TOGGLE" })}
          className="px-6 py-3 bg-blue-500 text-green-800 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Toggle
        </button>
      </div>
    </div>
  );
}

export default ToggleMachine;
