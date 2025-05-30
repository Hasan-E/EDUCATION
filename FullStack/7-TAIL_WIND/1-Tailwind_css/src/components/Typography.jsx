const Typography = () => {
  return (
    <div>
      {/* //* Typography */}
      <p className="text-2xl">Typography</p>
      <p className="text-sm">Typography</p>
      <p className="text-base/8">Typography</p>
      <p className="text-lg">Typography</p>
      <p className="text-xl">Typography</p>
      <p className="text-2xl">Typography</p>
      <h1 className="text-4xl">Başlık</h1>
      <h2 className="text-3xl">Başlık</h2>
      <h2 className="text-[60px] ">Başlık</h2>

      {/* //* Line Clamp */}
      <article>
        <p className="line-clamp-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          facilis distinctio ab asperiores autem maxime nemo fuga explicabo
          necessitatibus modi quod praesentium mollitia minus omnis, nostrum
          ullam aliquam! Reprehenderit, veritatis.Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Accusantium facilis distinctio ab
          asperiores autem maxime nemo fuga explicabo necessitatibus modi quod
          praesentium mollitia minus omnis, nostrum ullam aliquam!
          Reprehenderit, veritatis.
        </p>
      </article>
      <div className="font-bold">
        <p className="text-center">Merhaba</p>
        <p className="underline">Merhaba</p>
        <p className="line-through">Merhaba</p>
        <p className="uppercase">Merhaba</p>
        <p className="lowercase">Merhaba</p>
        <p className="text-red-400">Merhaba</p>
        <p className="text-red-900">Merhaba</p>
        <p className="text-green-600">Merhaba</p>
        <p className="text-[#8DBCC7]">Merhaba</p>
        <p className="text-[rgb(255,233,154)]">Merhaba</p>
        <p className="bg-slate-500">Merhaba</p>
        <p className="bg-[#8DBCC7]">Merhaba</p>
      </div>
    </div>
  );
};

export default Typography;
