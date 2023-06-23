"use client";
import { SocialMediaData } from "@/data/social";
import Icon from "./Icon";

export default function SocialMedia() {
  return (
    <div className="flex justify-center items-center sm:gap-8 gap-4">
      {SocialMediaData.map(({ id, title, icon, link }) => (
        <Icon key={id} title={title} icon={icon} link={link} />
      ))}
    </div>
  );
}
