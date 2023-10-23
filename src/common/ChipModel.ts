import { CreateBaseChip, CustomChip } from "./CustomChip";
import { PinInfo } from "./Pin";
import { Pos, Wire } from "./Wire";
interface Saves {
    [key: string]: string;
}

const chips: Saves = {
    NAND: `{
        "Name": "NAND",
        "Colour": "#4F5E8F",
        "InputPins": [
          {
            "Name": "Pin",
            "ID": 260329442,
            "PositionY": 0.60185194,
            "ColourThemeName": "Red"
          },
          {
            "Name": "Pin",
            "ID": 895713554,
            "PositionY": 0.0925928354,
            "ColourThemeName": "Red"
          }
        ],
        "OutputPins": [
          {
            "Name": "Pin",
            "ID": 2060701350,
            "PositionY": 0.2870369,
            "ColourThemeName": "Red"
          }
        ],
        "SubChips": [
          {
            "Name": "AND",
            "ID": 1000669325,
            "Points": [
              {
                "X": -5.82407427,
                "Y": 0.259259343
              }
            ],
            "Data": null
          },
          {
            "Name": "NOT",
            "ID": 1654914133,
            "Points": [
              {
                "X": -4.268519,
                "Y": 0.222222209
              }
            ],
            "Data": null
          }
        ],
        "Connections": [
          
          {
            "Source": {
              "PinType": 1,
              "SubChipID": 0,
              "PinID": 260329442
            },
            "Target": {
              "PinType": 3,
              "SubChipID": 1000669325,
              "PinID": 0
            },
            "WirePoints": [
              {
                "X": -7.837778,
                "Y": 0.60185194
              },
              {
                "X": -6.37407446,
                "Y": 0.379259348
              }
            ],
            "ColourThemeName": "Red"
          },
      
          {
            "Source": {
              "PinType": 1,
              "SubChipID": 0,
              "PinID": 895713554
            },
            "Target": {
              "PinType": 3,
              "SubChipID": 1000669325,
              "PinID": 1
            },
            "WirePoints": [
              {
                "X": -7.837778,
                "Y": 0.0925928354
              },
              {
                "X": -6.37407446,
                "Y": 0.139259338
              }
            ],
            "ColourThemeName": "Red"
          },
      
          {
            "Source": {
              "PinType": 4,
              "SubChipID": 1000669325,
              "PinID": 2
            },
            "Target": {
              "PinType": 3,
              "SubChipID": 1654914133,
              "PinID": 0
            },
            "WirePoints": [
              {
                "X": -5.274074,
                "Y": 0.259259343
              },
              {
                "X": -4.818519,
                "Y": 0.222222209
              }
            ],
            "ColourThemeName": "Red"
          },
          
          {
            "Source": {
              "PinType": 4,
              "SubChipID": 1654914133,
              "PinID": 1
            },
            "Target": {
              "PinType": 2,
              "SubChipID": 0,
              "PinID": 2060701350
            },
            "WirePoints": [
              {
                "X": -3.718519,
                "Y": 0.222222209
              },
              {
                "X": 7.837778,
                "Y": 0.2870369
              }
            ],
            "ColourThemeName": "Red"
          }
        ]
      }`,
    OR: `{
        "Name": "OR",
        "Colour": "#0C6215",
        "InputPins": [
          {
            "Name": "Pin",
            "ID": 207650570,
            "PositionY": 1.05555534,
            "ColourThemeName": "Red"
          },
          {
            "Name": "Pin",
            "ID": 1969904689,
            "PositionY": 0.425925851,
            "ColourThemeName": "Red"
          }
        ],
        "OutputPins": [
          {
            "Name": "Pin",
            "ID": 2097025545,
            "PositionY": 0.592592359,
            "ColourThemeName": "Red"
          }
        ],
        "SubChips": [
          {
            "Name": "NOT",
            "ID": 865926174,
            "Points": [
              {
                "X": -6.907408,
                "Y": 1.0367589
              }
            ],
            "Data": null
          },
          {
            "Name": "NOT",
            "ID": 923751815,
            "Points": [
              {
                "X": -6.95370436,
                "Y": 0.4076852
              }
            ],
            "Data": null
          },
          {
            "Name": "NAND",
            "ID": 372993944,
            "Points": [
              {
                "X": -5.09259272,
                "Y": 0.703703761
              }
            ],
            "Data": null
          }
        ],
        "Connections": [
          {
            "Source": {
              "PinType": 1,
              "SubChipID": 0,
              "PinID": 207650570
            },
            "Target": {
              "PinType": 3,
              "SubChipID": 865926174,
              "PinID": 0
            },
            "WirePoints": [
              {
                "X": -7.837778,
                "Y": 1.05555534
              },
              {
                "X": -7.45740843,
                "Y": 1.0367589
              }
            ],
            "ColourThemeName": "Red"
          },
          {
            "Source": {
              "PinType": 1,
              "SubChipID": 0,
              "PinID": 1969904689
            },
            "Target": {
              "PinType": 3,
              "SubChipID": 923751815,
              "PinID": 0
            },
            "WirePoints": [
              {
                "X": -7.837778,
                "Y": 0.425925851
              },
              {
                "X": -7.50370455,
                "Y": 0.4076852
              }
            ],
            "ColourThemeName": "Red"
          },
          {
            "Source": {
              "PinType": 4,
              "SubChipID": 865926174,
              "PinID": 1
            },
            "Target": {
              "PinType": 3,
              "SubChipID": 372993944,
              "PinID": 260329442
            },
            "WirePoints": [
              {
                "X": -6.357408,
                "Y": 1.0367589
              },
              {
                "X": -5.7375927,
                "Y": 0.823703766
              }
            ],
            "ColourThemeName": "Red"
          },
          {
            "Source": {
              "PinType": 4,
              "SubChipID": 923751815,
              "PinID": 1
            },
            "Target": {
              "PinType": 3,
              "SubChipID": 372993944,
              "PinID": 895713554
            },
            "WirePoints": [
              {
                "X": -6.403704,
                "Y": 0.4076852
              },
              {
                "X": -5.7375927,
                "Y": 0.583703756
              }
            ],
            "ColourThemeName": "Red"
          },
          {
            "Source": {
              "PinType": 4,
              "SubChipID": 372993944,
              "PinID": 2060701350
            },
            "Target": {
              "PinType": 2,
              "SubChipID": 0,
              "PinID": 2097025545
            },
            "WirePoints": [
              {
                "X": -4.44759274,
                "Y": 0.703703761
              },
              {
                "X": 7.837778,
                "Y": 0.592592359
              }
            ],
            "ColourThemeName": "Red"
          }
        ]
      }`,
};

export abstract class ChipModel implements ChipSaveStruct {
    Name: string;
    InputPins: PinInfo[];
    OutputPins: PinInfo[];
    SubChipsObject: ChipModel[];
    SubChips: ChipData[];
    Connections: Wire[];
    Points: Array<Pos> = [];
    Data: any;

    Colour: string = "#000";
    IsBasedChip: boolean = false;
    ID: number = Date.now();

    public static FromJSON(chipName: string, chipID: number) {
        if (!Object.keys(chips).includes(chipName)) {
            throw "Chip not found!";
        }
        const res = new CustomChip(
            JSON.parse(chips[chipName]) as ChipSaveStruct
        );
        res.SubChipsObject = res.SubChips.map((chip) =>
            CreateBaseChip(chip.Name, chip.ID)
        );

        res.setConnection();
        return res;
    }

    public setConnection() {
        console.log(this);
        this.Connections = this.Connections.sort((e) =>
            e.Source.PinType == 1 ? 2 : e.Target.PinType == 2 ? 0 : 1
        ).map((e, i) => {
            if (e.Source.PinType != 1)
                e.Source.Chip = this.SubChipsObject.filter(
                    (chip) => chip.ID == e.Source.SubChipID
                )[0];
            if (e.Target.PinType != 2)
                e.Target.Chip = this.SubChipsObject.filter(
                    (chip) => chip.ID == e.Target.SubChipID
                )[0];

            // Чип соеденён с другим чипом
            if (e.Source.SubChipID != 0 && e.Target.SubChipID != 0) {
                e.Target.Chip.InputPins[e.Target.PinID] =
                    e.Source.Chip.OutputPins[
                        e.Source.PinID - e.Source.Chip.InputPins.length
                    ];
            }

            // Чип соеденён с входои текущего чипа
            if (e.Source.SubChipID == 0 && e.Target.SubChipID != 0)
                e.Target.Chip.InputPins[e.Target.PinID] = this.InputPins.filter(
                    (pin) => pin.ID == e.Source.PinID
                )[0];

            // Чип соедёнен с выходом текущего чипа
            if (e.Source.SubChipID != 0 && e.Target.SubChipID == 0) {
                this.OutputPins = this.OutputPins.map((pin) => {
                    if (pin.ID == e.Target.PinID)
                        pin =
                            e.Source.Chip.OutputPins[
                                e.Source.PinID - e.Source.Chip.InputPins.length
                            ];
                    return pin;
                });
            }

            return e;
        });
    }

    constructor(props: {
        Name?: string;
        Colour?: string;
        InputPins?: Array<PinInfo>;
        OutputPins?: Array<PinInfo>;
        SubChips?: Array<ChipData>;
        Connections?: Array<Wire>;
        chipID?: number;
    }) {
        this.Name = props.Name || "";
        this.Colour = props.Colour || "#000";
        this.InputPins = props.InputPins || [];
        this.OutputPins = props.OutputPins || [];
        this.SubChips = props.SubChips || [];
        this.Connections = props.Connections || [];
        this.SubChipsObject = [];
        this.ID = props.chipID || 0;
    }

    SendInput(Connection: Wire) {}

    StartChipLogic() {}
}

export interface ChipSaveStruct {
    Name: string;
    Colour: string;
    InputPins: Array<PinInfo>;
    OutputPins: Array<PinInfo>;
    SubChips: Array<ChipData>;
    Connections: Array<Wire>;
}

export interface ChipData {
    Name: string;
    ID: number;
    Points: Array<Pos>;
    Data: any;
}
