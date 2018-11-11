export class MenuItem {
  public Name: string;
  public Link: string;
  public Settings: MenuItemSettings = new MenuItemSettings();

  public Color: string;

  constructor(name, link, color, settings?) {
    this.Name = name;
    this.Link = link;
    this.Color = color;
    this.Settings.IsExternalLink = (settings && settings.isExternal)? settings.isExternal: false;
    this.Settings.HasPreview = (settings && settings.hasPreview)? settings.hasPreview: false;
  }
}

export class MenuItemSettings {
  public IsExternalLink: boolean;
  public HasPreview: boolean;
}