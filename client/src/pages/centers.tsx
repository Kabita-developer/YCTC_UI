import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Building2, Loader2 } from "lucide-react";

export type Center = {
    code: string;
    name: string;
    director: string;
    address: string;
    district: string;
    state: string;
    courses: string;
};

const bestCenterOfMonth = {
    name: "Memari Jatiya Yuva Computer Shaksharta Mission",
    director: "Gobinda Kundu",
    image: "/ickouynl7jpj300.jpg",
};

const SHOW_ALL = "Show All";

function uniqueSorted(arr: string[]) {
    return [SHOW_ALL, ...Array.from(new Set(arr)).filter(Boolean).sort()];
}

export default function Centers() {
    const [allCenters, setAllCenters] = useState<Center[]>([]);
    const [loading, setLoading] = useState(true);
    const [district, setDistrict] = useState(SHOW_ALL);
    const [stateFilter, setStateFilter] = useState(SHOW_ALL);

    useEffect(() => {
        let cancelled = false;
        fetch("/centers.json")
            .then((r) => (r.ok ? r.json() : []))
            .then((data: Center[]) => {
                if (!cancelled && Array.isArray(data)) setAllCenters(data);
            })
            .catch(() => { if (!cancelled) setAllCenters([]); })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };
    }, []);

    const districts = useMemo(() => uniqueSorted(allCenters.map((c) => c.district)), [allCenters]);
    const states = useMemo(() => uniqueSorted(allCenters.map((c) => c.state)), [allCenters]);

    const filteredCenters = useMemo(() => {
        return allCenters.filter((c) => {
            if (district !== SHOW_ALL && c.district !== district) return false;
            if (stateFilter !== SHOW_ALL && c.state !== stateFilter) return false;
            return true;
        });
    }, [allCenters, district, stateFilter]);

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col">
            <Navbar />

            <main className="flex-grow py-12 md:py-20">
                <div className="container-pad">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-2 ring-emerald-200">
                                <Building2 className="h-6 w-6" strokeWidth={2.2} />
                            </div>
                            <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl uppercase">
                                Centers
                            </h1>
                        </div>
                        <div
                            className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-amber-400"
                            aria-hidden
                        />
                    </div>

                    {/* Best Center of the Month */}
                    <section className="mb-14">
                        <div className="bg-emerald-600 text-white text-center py-3 px-4 rounded-t-2xl font-semibold text-sm uppercase tracking-wide">
                            Best Center of the Month
                        </div>
                        <Card className="overflow-hidden border-none shadow-xl rounded-t-none rounded-b-2xl flex flex-col sm:flex-row">
                            <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-slate-100">
                                <img
                                    src={bestCenterOfMonth.image}
                                    alt={bestCenterOfMonth.director}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 p-6 sm:p-8 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white flex flex-col justify-center">
                                <h2 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                                    {bestCenterOfMonth.name}
                                </h2>
                                <p className="mt-2 text-emerald-100 text-sm font-medium">
                                    Director: {bestCenterOfMonth.director}
                                </p>
                            </div>
                        </Card>
                    </section>

                    {/* Filters */}
                    {!loading && (
                        <div className="flex flex-wrap items-center gap-6 mb-6">
                            <div className="flex items-center gap-3">
                                <Label htmlFor="district" className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                                    Select District
                                </Label>
                                <Select value={district} onValueChange={setDistrict}>
                                    <SelectTrigger id="district" className="w-[180px] rounded-xl border-slate-200">
                                        <SelectValue placeholder="Show All" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {districts.map((d) => (
                                            <SelectItem key={d} value={d}>
                                                {d}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center gap-3">
                                <Label htmlFor="state" className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                                    Select State
                                </Label>
                                <Select value={stateFilter} onValueChange={setStateFilter}>
                                    <SelectTrigger id="state" className="w-[180px] rounded-xl border-slate-200">
                                        <SelectValue placeholder="Show All" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {states.map((s) => (
                                            <SelectItem key={s} value={s}>
                                                {s}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}

                    {/* Centers Table */}
                    <Card className="overflow-hidden border-none shadow-xl rounded-2xl">
                        {loading ? (
                            <div className="flex items-center justify-center gap-2 py-16 text-slate-600">
                                <Loader2 className="h-6 w-6 animate-spin" />
                                <span>Loading centers…</span>
                            </div>
                        ) : (
                            <>
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-emerald-600 hover:bg-emerald-600 border-emerald-500">
                                            <TableHead className="text-white font-semibold">Center Code</TableHead>
                                            <TableHead className="text-white font-semibold">Center Name</TableHead>
                                            <TableHead className="text-white font-semibold">Director</TableHead>
                                            <TableHead className="text-white font-semibold">Address</TableHead>
                                            <TableHead className="text-white font-semibold">District</TableHead>
                                            <TableHead className="text-white font-semibold">State</TableHead>
                                            <TableHead className="text-white font-semibold">Courses Offered</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredCenters.map((center) => (
                                            <TableRow key={center.code} className="border-slate-100">
                                                <TableCell className="font-medium text-slate-900">{center.code}</TableCell>
                                                <TableCell className="text-slate-700">{center.name}</TableCell>
                                                <TableCell className="text-slate-700">{center.director}</TableCell>
                                                <TableCell className="text-slate-600 text-xs max-w-[200px]">{center.address}</TableCell>
                                                <TableCell className="text-slate-700">{center.district}</TableCell>
                                                <TableCell className="text-slate-700">{center.state}</TableCell>
                                                <TableCell className="text-slate-600 text-xs">{center.courses}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                {filteredCenters.length === 0 && (
                                    <div className="py-12 text-center text-slate-500 text-sm">
                                        No centers match the selected filters.
                                    </div>
                                )}
                            </>
                        )}
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
}
