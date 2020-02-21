export interface ToolBoxButton {
    tool: 'note';
    icon: string;
}

export interface ToolButtonList {
    title?: string;
    buttons: ToolButton[];
}

export interface ToolButton {
  title: string;
  icon: string;
}