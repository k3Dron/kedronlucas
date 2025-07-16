export default function MarqueeText({ text = "Kedron", repeat = 20 }) {
  const repeatedText = Array(repeat).fill(text).join(" ");

  return (
    <div className="textflowpaddng overflow-hidden whitespace-nowrap bg-white text-black bebas text-4xl relative items-center justify-center">
      <div className="p-10 flex w-max">
        <div className="animate-marquee px-4">{repeatedText}</div>
        <div className="w-3"></div>
        <div className="animate-marquee px-4 absolute left-full">{repeatedText}</div>
      </div>
    </div>
  );
}
