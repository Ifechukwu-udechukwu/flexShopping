import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "FlexShopping. - Admin",
    description: "FlexShopping. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
