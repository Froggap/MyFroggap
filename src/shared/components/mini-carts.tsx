import Image from "next/image";
import TagsAbout from "@/modules/landing/about/ui/tagsAbout";

interface MiniCartsProps {
    img: string;
    title: string;
    desciption: string;
    technology: LocalTechnologyI[];
    createdAt: string;
    updatedAt: string;
}

interface LocalTechnologyI {
    label: string | undefined;
    Icon: string;
    size?: string | undefined;
    color?: string | undefined;

}


export default function MiniCarts({ createdAt, updatedAt, img, title, desciption, technology }: MiniCartsProps) {
    return (
        <div className="flex flex-col items-center gap-2 pb-2 w-full  border border-black/20 rounded-xl overflow-hidden">
            <div className="flex flex-col items-center gap-2 w-full">
                <div className="rounded-full flex items-center justify-center">
                    <Image className="" src={img} alt="perfil" width={1000} height={1000}></Image>
                </div>
                <p className="text-left text-black pl-2 w-full">{createdAt}</p>
                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <h2 className="text-xl text-black">
                        {title}
                    </h2>
                    <span className="text-sm text-center text-black">
                        {desciption}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 ">
                {technology.map((item, index) => (
                    <TagsAbout
                        key={index}
                        icon={{ name: item.Icon, color: item.color, size: item.size }}
                        size="text-xs"
                        padding="p-0.5 px-2"
                    />
                ))}
            </div>
        </div>
    )
}