export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    caseStudyLink: string;
}

export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface NavItem {
    label: string;
    path: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface CommonButtonProps {
    onClick?: () => void;
    title: string;
    className?: string;
}
