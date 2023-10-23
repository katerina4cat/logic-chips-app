import EditPage from "./pages/EditPage/EditPage";

function App() {
    const test = `{
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
          "Points": [
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
          "Points": [
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
          "Points": [
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
          "Points": [
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
          "Points": [
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
    }`;
    return (
        <>
            <EditPage chipFile={test} />
        </>
    );
}

export default App;
