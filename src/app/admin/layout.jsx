import { redirect } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import SideBar from "@/components/ui/SideBar";
import { verifySession } from "@/actions/auth";
import { InitializerSessionState } from "@/store/InitializerSessionState";

export default async function AdminLayout({ children }) {

  const session = await verifySession()

  if( !session ){
      redirect('/iniciar-sesion')
  }

  return (
    <>
        <div className="flex">
          <SideBar />
          <div className="w-full flex flex-col ">
            <Navbar user={ session.user } />
            <main className="w-full h-full px-5 py-6">
              {children}
            </main>
          </div>
        </div>
        <InitializerSessionState 
          session={ session }
        />
    </>
  );
}
