import { Navbar } from "@/components/ui/Navbar";
import SideBar from "@/components/ui/SideBar";
import ReduxProvider from "@/store/ReduxProvider";

export default async function AdminLayout({ children }) {
  // const session = await verifySession()

  // if( !session ){
  //     redirect('/iniciar-sesion')
  // }

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col ">
          <Navbar />
          <main className="w-full h-full px-5 py-6">
            <ReduxProvider>{children}</ReduxProvider>
          </main>
        </div>
      </div>
      {/* <RevalidateSessionCookie
                token={ session?.token }
            /> */}
    </>
  );
}