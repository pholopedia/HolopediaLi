export class CoinSettings {
  ObverseText: string[];
  ObverseSettings: SideSettings;
  ReverseText: string[];
  ReverseSettings: SideSettings;
  Style: any;
  zDegShift: number;

  private hexThemes = {
      purple: new SideSettings("purple", "#FFCBFF", "#FFCBFF", true),
      indigo: new SideSettings("indigo", "#CAC3F5", "#CAC3F5", true),
      red: new SideSettings("red", "#F9CCD7", "#F9CCD7", true),
      beige: new SideSettings("beige", "#540101", "#F1E6CD", true),
      turquoise: new SideSettings("turq", "#C6F0F0", "#C6F0F0", true),
      orange: new SideSettings("orange", "#F9C4A4", "#F9C4A4", true),
      olive: new SideSettings("olive", "#F7F5BF", "#F7F5BF", true),
  } 

  constructor(obvText, obvSettings, revText, revSettings, zDegShift?, style?) {
      this.ObverseText = obvText;
      if (obvSettings.theme) this.ObverseSettings = this.hexThemes[obvSettings.theme];
      if (obvSettings.url) this.ObverseSettings = new SideSettings(obvSettings.url, "", "");
      
      this.ReverseText = revText;
      if (revSettings.theme) this.ReverseSettings = this.hexThemes[revSettings.theme];
      if (revSettings.url) this.ReverseSettings = new SideSettings(revSettings.url, "", "");

      this.Style = style;
      this.zDegShift = zDegShift;
  }
}

export class SideSettings {
  Url: string;
  TextColor: string;
  BackgroundColor: string;

  constructor(urlPostfix, textColor, bgColor, isHex?) {
      this.Url = (isHex)? "https://quantumfunds.files.wordpress.com/2018/11/hex_" + urlPostfix + ".png": urlPostfix;
      this.TextColor = textColor;
      this.BackgroundColor = bgColor;
  }
}