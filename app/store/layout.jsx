import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "FlexShopping. - Store Dashboard",
    description: "FlexShopping. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
