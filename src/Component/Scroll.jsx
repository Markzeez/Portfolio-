import ScrollingText from './Component/ScrollingText';
import AScrollingText from './Component/AScrollingText';

function Scroll() {
  return (
    <div>
        <div className="relative overflow-hidden bg-slate-900 min-h-[250px]">
        <div className="absolute top-0 left-0 w-full z-0 opacity-20">
          <ScrollingText direction="left" />
          <AScrollingText direction="right" />
          <ScrollingText direction="left" />
        </div>
      </div>

    </div>
  )
}

export default Scroll