export class MenuItem {
  public Name: string;
  public Link: string;
  public Settings: MenuItemSettings = new MenuItemSettings();

  constructor(name: string, link: string, settings?: { hasPreview?: boolean; isExternal?: boolean; }) {
    this.Name = name;
    this.Link = link;
    this.Settings.IsExternalLink = (settings && settings.isExternal)? settings.isExternal: false;
    this.Settings.HasPreview = (settings && settings.hasPreview)? settings.hasPreview: false;
  }
}

export class MenuItemSettings {
  public IsExternalLink: boolean;
  public HasPreview: boolean;
}