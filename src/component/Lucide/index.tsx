import * as lucideIcons from 'lucide-react';
import {twMerge} from "tailwind-merge";

export const {icons} = lucideIcons;

interface LucideProps extends React.ComponentPropsWithoutRef<"svg"> {
    title?: string;
    icon: keyof typeof icons;
}

export default function Lucide(props: LucideProps) {
    const {icon, title, ...computedProps} = props;
    const Component = icons[icon];
    if (!Component) {
        return null;
    }

    return (
        <Component {...computedProps} className={twMerge(['h-5 w-5 stroke-1', props.className])}/>
    );
};