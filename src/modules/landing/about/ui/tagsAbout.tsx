import Icon from "@/shared/components/customIcon";

interface TagAboutPops {
    title?: string;
    icon?: {
        name?: string;
        color?: string;
        size?: string;
    }
    size?: string;
    padding?: string;
}

export default function TagsAbout({ title, size, padding, icon }: TagAboutPops) {

    console.log(icon)
    return (
        <div className={`flex flex-col items-center justify-center bg-black rounded-xl ${padding}`}>
            <div className="flex items-center justify-center gap-2  w-full">
                <div className={`${icon?.size} rounded-full  flex items-center justify-center`}>
                    {icon?.name && (
                        <Icon
                            icon={icon.name}
                            color={icon.color}
                            className={icon.size}
                        />
                    )}
                </div>
                {title && (
                    <h2 className={`${size} font-bold text-center text-white truncate`}>
                        {title}
                    </h2>
                )}
            </div>
        </div>
    )
}