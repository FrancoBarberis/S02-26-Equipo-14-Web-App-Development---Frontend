import FavouriteProductCard from "@/components/ui/profile/user/favourites/favourite-product-card";

export default function MyFavorites() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif mb-12">Your Favorites</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FavouriteProductCard
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2AoIFA7s0CsQlxMBJzaXoCn4gLMJjLScBoVil0ZsfrEici_LEKeABeSIzh3eZ0HxLLA7raPYnsYpjY_GJKy7mjxWQRRcSQ9B0dpi3lBwxDTCrJcea7_0JITPLgnTl6tDS7WDoku-RWTI4A2w6gVHlhlT9f_sJtOugk7RX6cWQB8qus270LURenRLD7pil4937CqT0R7fbX0RxTZH0nQKScysGI5UnAJklemq40ARC0OfqiD0U3Bbk7HyaJ28A6GzKx8E-trOhVKs"
            brand="Stübben"
            name="Close Contact Saddle"
            price="$3,200"
          />

          <FavouriteProductCard
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdw33ZRX4DE8AiDo4-eStVFopfqb3N92AjTfKOjwvnK6xlvDxLuQ80kLdUR1w7YaCYZDJ-Wq_S--lCD6kg7C5Es36mr0yUZmftnKWdn2ZOUAHYkpI9y3XVJXDilPFgJA7AW-PPP2HzdI6I1BlU32QVCHCAqeLJok77e_-5k8jHFPxO0fuUhiLf73thi5EuGIoV6UTfzXw6lUzMr4vbcD8uvK5t289i0-BApQHBDx_u70jro72OIF43y5pVr7sfm5prWrYlRTGS3AU"
            brand="Ariat"
            name="Monaco Boots"
            price="$599"
          />
        </div>
      </main>
    </>
  );
}
