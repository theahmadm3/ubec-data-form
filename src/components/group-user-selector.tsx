import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { groupUsers, GroupUser } from "@/lib/user-types";

type GroupUserSelectorProps = {
  onSelectGroupUser: (groupUser: GroupUser) => void;
};

const GroupUserSelector = ({ onSelectGroupUser }: GroupUserSelectorProps) => {
  return (
    <div className="text-center">
        <h2 className="text-3xl font-headline font-semibold mb-2">Select Your Group Role</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your role determines which form you need to complete. Please select the role that applies to you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupUsers.map((user) => (
                <Card
                    key={user.id}
                    className="cursor-pointer hover:shadow-lg hover:border-primary transition-all duration-200 text-left"
                    onClick={() => onSelectGroupUser(user)}
                >
                    <CardHeader>
                        <CardTitle>{user.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">{user.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  );
};

export default GroupUserSelector;
