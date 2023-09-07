import Post from "@/components/Post";

export const metadata = {
  title: "Home | SMedia",
  description: "Social Media",
};

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-4 md:mb-0 md:grid grid-cols-3 gap-7">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  );
};

export default HomePage;
