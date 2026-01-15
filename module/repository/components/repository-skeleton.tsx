import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function RepositoryCardSkeleton() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-5 w-48 rounded-md" />
                            <Skeleton className="h-5 w-20 rounded-full" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[80%] rounded-md" />
                            <Skeleton className="h-4 w-[60%] rounded-md" />
                        </div>
                        <div className="pt-2">
                            <Skeleton className="h-4 w-24 rounded-full" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Skeleton className="h-9 w-9 rounded-md" />
                        <Skeleton className="h-9 w-24 rounded-md" />
                    </div>
                </div>
            </CardHeader>

        </Card>
    )
}

export function RepositoryListSkeleton() {
    return (
        <div className="grid gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
                <RepositoryCardSkeleton key={i} />
            ))}
        </div>
    )
}