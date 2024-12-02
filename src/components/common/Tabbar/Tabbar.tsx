export interface Tab {
  title: string;
  selected: boolean;
}

interface TabbarProps {
  tabs: Tab[];
  onTabSelected: (p_tab: Tab) => void;
}

export default function Tabbar({ tabs, onTabSelected }: TabbarProps) {
  return (
    <div className={`flex flex-row h-[48px] border-[#F3F3F3] border-b-[1px]`}>
      {tabs.map((it, idx) => {
        return (
          <button
            key={idx}
            className='flex flex-1 items-center justify-center'
            onClick={() => {
              onTabSelected(it);
            }}
          >
            <div
              className={`h-full items-center justify-center flex ${it.selected && 'border-b-[2px] border-b-primary'}`}
            >
              <p
                className={`text-[14px] leading-[20px] ${it.selected ? 'font-bold text-primary' : 'text-secondary'}`}
              >
                {it.title}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
