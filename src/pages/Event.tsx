import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1">
            <p className="text-blue-500 text-2xl text-center my-40">Clique em algum vídeo para começar</p>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
};
