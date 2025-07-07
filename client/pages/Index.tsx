import { useState } from "react";
import {
  Zap,
  Navigation,
  CreditCard,
  QrCode,
  Receipt,
  MapPin,
  Bell,
  User,
  Search,
  Wallet,
  Car,
  Battery,
  Shield,
  Home,
  Star,
  TrendingUp,
  Clock,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "fastag",
    name: "FASTag",
    icon: Car,
    color: "bg-highway-500",
    description: "Quick toll payments",
    popular: true,
  },
  {
    id: "ev-chargers",
    name: "EV Chargers",
    icon: Battery,
    color: "bg-green-500",
    description: "Find & book charging",
  },
  {
    id: "gps",
    name: "GPS Navigation",
    icon: Navigation,
    color: "bg-blue-500",
    description: "Smart route planning",
  },
  {
    id: "raksha-qr",
    name: "Raksha QR",
    icon: Shield,
    color: "bg-red-500",
    description: "Emergency assistance",
  },
  {
    id: "bill-payments",
    name: "Bill Payments",
    icon: Receipt,
    color: "bg-purple-500",
    description: "Pay utilities & more",
  },
  {
    id: "wallet",
    name: "Wallet",
    icon: Wallet,
    color: "bg-orange-500",
    description: "Manage payments",
  },
];

const quickActions = [
  { name: "Recharge", icon: Zap, color: "bg-yellow-500" },
  { name: "Locate", icon: MapPin, color: "bg-blue-500" },
  { name: "Pay", icon: CreditCard, color: "bg-green-500" },
  { name: "Scan", icon: QrCode, color: "bg-purple-500" },
];

const recentActivities = [
  {
    title: "FASTag Recharge",
    subtitle: "₹500 added successfully",
    time: "2 hours ago",
    icon: Car,
    color: "bg-highway-500",
  },
  {
    title: "EV Charging Session",
    subtitle: "Completed at CP-001",
    time: "1 day ago",
    icon: Battery,
    color: "bg-green-500",
  },
  {
    title: "Bill Payment",
    subtitle: "Electricity bill paid",
    time: "3 days ago",
    icon: Receipt,
    color: "bg-purple-500",
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-highway-500 to-highway-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-highway-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Highway Delite
                </h1>
                <p className="text-xs text-slate-600">
                  Your mobility companion
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-slate-700" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-slate-700" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto pb-20 lg:pb-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-highway-500 via-highway-600 to-highway-700 text-white p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 lg:mb-8">
              <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-white">
                Good Morning, Traveler!
              </h2>
              <p className="text-black text-sm lg:text-base">
                Everything you need for your journey
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md lg:max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search services, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-0 text-slate-900 placeholder:text-slate-500"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 lg:mt-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-black text-sm">Wallet Balance</p>
                      <p className="text-xl font-bold text-black">₹2,450</p>
                    </div>
                    <Wallet className="h-8 w-8 text-black" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-black text-sm">Total Savings</p>
                      <p className="text-xl font-bold text-black">₹8,320</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-black" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hidden lg:block">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-black text-sm">Trip Count</p>
                      <p className="text-xl font-bold text-black">47</p>
                    </div>
                    <Car className="h-8 w-8 text-black" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hidden lg:block">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-black text-sm">Points</p>
                      <p className="text-xl font-bold text-black">1,250</p>
                    </div>
                    <Star className="h-8 w-8 text-black" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="px-6 lg:px-8 -mt-8 mb-6 lg:mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-4">
              {quickActions.map((action, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div
                      className={`w-12 h-12 lg:w-16 lg:h-16 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-2`}
                    >
                      <action.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <p className="text-xs lg:text-sm font-medium text-slate-900">
                      {action.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 lg:px-8 mb-6 lg:mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <h3 className="text-lg lg:text-xl font-semibold text-slate-900">
                Our Services
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-highway-600 hover:text-highway-700"
              >
                View All
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                >
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={`w-12 h-12 lg:w-14 lg:h-14 ${service.color} rounded-xl flex items-center justify-center`}
                      >
                        <service.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                      </div>
                      {service.popular && (
                        <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1 lg:text-lg">
                      {service.name}
                    </h4>
                    <p className="text-xs lg:text-sm text-slate-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:px-8 lg:max-w-4xl lg:mx-auto">
          {/* Offers Section */}
          <section className="px-6 lg:px-0 mb-6 lg:mb-8">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <h3 className="text-lg lg:text-xl font-semibold text-slate-900">
                Special Offers
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-highway-600 hover:text-highway-700"
              >
                View All
              </Button>
            </div>

            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Gift className="h-5 w-5 mr-2" />
                      <Badge className="bg-white/20 text-white">
                        Limited Time
                      </Badge>
                    </div>
                    <h4 className="font-bold text-lg lg:text-xl mb-1">
                      20% Cashback
                    </h4>
                    <p className="text-green-100 text-sm lg:text-base">
                      On FASTag recharge above ₹500
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white text-green-600 hover:bg-green-50 lg:text-base lg:px-6"
                  >
                    Claim Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Recent Activity */}
          <section className="px-6 lg:px-0 mb-6 lg:mb-8">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <h3 className="text-lg lg:text-xl font-semibold text-slate-900">
                Recent Activity
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-highway-600 hover:text-highway-700"
              >
                View All
              </Button>
            </div>

            <div className="space-y-3 lg:space-y-4">
              {recentActivities.map((activity, index) => (
                <Card
                  key={index}
                  className="bg-white hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4 lg:p-5">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 lg:w-12 lg:h-12 ${activity.color} rounded-xl flex items-center justify-center`}
                      >
                        <activity.icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 lg:text-base">
                          {activity.title}
                        </h4>
                        <p className="text-sm lg:text-base text-slate-600">
                          {activity.subtitle}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-xs lg:text-sm text-slate-500">
                          <Clock className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg lg:hidden">
        <div className="grid grid-cols-5 py-2">
          <Button
            variant="ghost"
            className="flex flex-col items-center py-2 h-auto text-highway-600"
          >
            <Home className="h-5 w-5 mb-1" />
            <span className="text-xs">Home</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center py-2 h-auto text-slate-600 hover:text-highway-600"
          >
            <MapPin className="h-5 w-5 mb-1" />
            <span className="text-xs">Locate</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center py-2 h-auto text-slate-600 hover:text-highway-600"
          >
            <QrCode className="h-5 w-5 mb-1" />
            <span className="text-xs">Scan</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center py-2 h-auto text-slate-600 hover:text-highway-600"
          >
            <Wallet className="h-5 w-5 mb-1" />
            <span className="text-xs">Wallet</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center py-2 h-auto text-slate-600 hover:text-highway-600"
          >
            <User className="h-5 w-5 mb-1" />
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </nav>
    </div>
  );
}
