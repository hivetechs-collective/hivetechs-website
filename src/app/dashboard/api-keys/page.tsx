"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  createdAt: string;
  lastUsed: string | null;
}

export default function ApiKeys() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: "1",
      name: "Development Key",
      prefix: "hive_dev_",
      createdAt: "2025-05-01",
      lastUsed: "2025-05-20",
    },
    {
      id: "2",
      name: "Production Key",
      prefix: "hive_prod_",
      createdAt: "2025-05-10",
      lastUsed: null,
    },
  ]);
  const [isCreatingKey, setIsCreatingKey] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyValue, setNewKeyValue] = useState("");
  const [showNewKey, setShowNewKey] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  const handleCreateKey = () => {
    if (!newKeyName.trim()) {
      return;
    }

    // In a real implementation, this would call an API to create a new key
    // For now, we'll simulate creating a new key
    const keyPrefix = "hive_" + Math.random().toString(36).substring(2, 7) + "_";
    const keyValue = keyPrefix + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    const newKey: ApiKey = {
      id: (apiKeys.length + 1).toString(),
      name: newKeyName,
      prefix: keyPrefix,
      createdAt: new Date().toISOString().split("T")[0],
      lastUsed: null,
    };
    
    setApiKeys([...apiKeys, newKey]);
    setNewKeyValue(keyValue);
    setShowNewKey(true);
    setIsCreatingKey(false);
    setNewKeyName("");
  };

  const handleDeleteKey = (id: string) => {
    // In a real implementation, this would call an API to delete the key
    // For now, we'll just filter it out
    setApiKeys(apiKeys.filter(key => key.id !== id));
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">API Keys</h1>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* API Keys List */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Your API Keys</h3>
              <button
                type="button"
                onClick={() => setIsCreatingKey(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Create New Key
              </button>
            </div>
            <ul className="divide-y divide-gray-200">
              {apiKeys.map((key) => (
                <li key={key.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-blue-600 truncate">{key.name}</p>
                      <p className="mt-1 flex items-center text-sm text-gray-500">
                        <span className="truncate">Prefix: {key.prefix}***</span>
                      </p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <button
                        onClick={() => handleDeleteKey(key.id)}
                        className="ml-2 px-2 py-1 text-xs font-medium text-red-700 hover:text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        Created on {key.createdAt}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      {key.lastUsed ? (
                        <p>Last used on {key.lastUsed}</p>
                      ) : (
                        <p>Never used</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}

              {apiKeys.length === 0 && (
                <li className="px-4 py-5 sm:px-6 text-center text-gray-500">
                  You don't have any API keys yet. Create one to get started.
                </li>
              )}
            </ul>
          </div>

          {/* Create New Key Form */}
          {isCreatingKey && (
            <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Create New API Key</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Create a new API key to access the HiveTechs MCP service. You'll only be able to see the full key once, so make sure to copy it.</p>
                </div>
                <div className="mt-5 sm:flex sm:items-center">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="key-name" className="sr-only">
                      API Key Name
                    </label>
                    <input
                      type="text"
                      name="key-name"
                      id="key-name"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="API Key Name"
                      value={newKeyName}
                      onChange={(e) => setNewKeyName(e.target.value)}
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleCreateKey}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Create
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsCreatingKey(false)}
                      className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* New Key Display */}
          {showNewKey && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">API Key Created</h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Your new API key has been created. Please copy it now as you won't be able to see it again.</p>
                  </div>
                  <div className="mt-4">
                    <div className="-mx-2 -my-1.5 flex">
                      <input
                        type="text"
                        readOnly
                        value={newKeyValue}
                        className="flex-1 bg-green-100 px-3 py-2 rounded-md text-sm font-mono text-green-800"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(newKeyValue);
                        }}
                        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
                      >
                        Copy
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowNewKey(false)}
                        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* API Documentation Link */}
          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">API Documentation</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Learn how to use the HiveTechs MCP API with our comprehensive documentation.</p>
              </div>
              <div className="mt-5">
                <Link
                  href="/docs/api"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
