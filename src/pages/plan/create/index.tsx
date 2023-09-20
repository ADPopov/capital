import { useRouter } from "next/navigation";

import CreateSavingPlan from "~/components/CreateSavingPlan";
import { api } from "~/utils/api";

export default function Page() {
    const router = useRouter();
    const plan = api.savingPlan.findPlan.useQuery();

    if (plan.data && plan.data > 0) {
        router.push("/");
    }

    return <CreateSavingPlan/>
};