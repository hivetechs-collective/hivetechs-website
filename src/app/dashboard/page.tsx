"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [credits, setCredits] = useState(100); // Mock credits
  const [subscriptionTier, setSubscriptionTier] = useState("Free"); // Mock subscription tier
  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: "API Call", date: "2025-05-21", credits: 5 },
    { id: 2, type: "API Call", date: "2025-05-20", credits: 10 },
    { id: 3, type: "Credit Purchase", date: "2025-05-15", credits: 100 },
  ]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

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
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">
              Welcome, {session?.user?.name || "User"}
            </span>
            <button
              onClick={() => router.push("/api/auth/signout")}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Credit Balance Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Credit Balance
                </h3>
                <div className="mt-1 text-3xl font-semibold text-blue-600">
                  {credits}
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      // In a real implementation, this would redirect to a purchase page
                      // For now, we'll just simulate adding credits
                      setCredits(credits + 50);
                      setRecentActivity([
                        {
                          id: recentActivity.length + 1,
                          type: "Credit Purchase",
                          date: new Date().toISOString().split("T")[0],
                          credits: 50,
                        },
                        ...recentActivity,
                      ]);
                    }}
                  >
                    Purchase Credits
                  </button>
                </div>
              </div>
            </div>

            {/* Subscription Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Subscription
                </h3>
                <div className="mt-1 text-3xl font-semibold text-blue-600">
                  {subscriptionTier} Plan
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      // In a real implementation, this would redirect to a subscription page
                      // For now, we'll just simulate upgrading the subscription
                      setSubscriptionTier(
                        subscriptionTier === "Free" ? "Pro" : "Enterprise"
                      );
                    }}
                  >
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>

            {/* API Usage Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">API Usage</h3>
                <div className="mt-1 text-3xl font-semibold text-blue-600">
                  15 / 100
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/dashboard/api-keys"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                  >
                    Manage API Keys
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Recent Activity
              </h3>
              <div className="mt-4 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Credits
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentActivity.map((activity) => (
                          <tr key={activity.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                              {activity.type}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {activity.date}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {activity.type === "Credit Purchase" ? (
                                <span className="text-green-600">
                                  +{activity.credits}
                                </span>
                              ) : (
                                <span className="text-red-600">
                                  -{activity.credits}
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
