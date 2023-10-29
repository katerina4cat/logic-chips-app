import React, { useState, useRef, useEffect } from "react";
import cl from "./EditChip.module.scss";
import EditPagePin from "./CurrentChipPins/EditPagePin";
import Chip from "./Chip";
import { Pin } from "../../common/Pin";
import EditPageOutPin from "./CurrentChipPins/EditPageOutPin";
import { Bus, BusDrawer, LineDrawer } from "./Bus";
import { BUS } from "../../common/BUS";
import { ChipModel } from "../../common/ChipModel";

interface EditReq {
    chipModel: ChipModel;
    VisiblePinTitles: boolean;
    VisibleAllPinTitles: boolean;
    other?: boolean;
}

const EditChip: React.FC<EditReq> = (props) => {
    const [setupsInput, setSetupsInput] = useState(0);
    const chipLoaded =
        setupsInput >= props.chipModel.InputPins.length || props.other;
    const [OutputPins, setOutputPins] = useState<Pin[]>([]);

    const updateAll = () => {
        if (!props.other) setOutputPins([...props.chipModel.OutputPins]);
    };
    const editPageRef = useRef<HTMLDivElement>(null);

    return (
        <div className={cl.EditPage} ref={editPageRef}>
            <div className={cl.InputPins}>
                {props.chipModel.InputPins.map((pinInput, i) => {
                    return (
                        <EditPagePin
                            key={props.chipModel.Name + i}
                            Pin={pinInput}
                            handleChangeInputPin={updateAll}
                            setupsInput={setSetupsInput}
                            VisiblePinTitles={props.VisibleAllPinTitles}
                            updateAll={updateAll}
                        />
                    );
                })}
            </div>
            <div className={cl.EditField} id="test">
                <BusDrawer
                    buses={
                        chipLoaded
                            ? props.chipModel.SubChips.filter(
                                  (chip) => chip.Name == BUS.name
                              )
                            : []
                    }
                />
                <LineDrawer
                    wires={chipLoaded ? props.chipModel.Connections : []}
                    updateAll={updateAll}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                    {chipLoaded
                        ? props.chipModel.SubChips.map((chip) =>
                              chip.Name == "BUS" ? (
                                  <Bus chip={chip} />
                              ) : (
                                  <Chip
                                      EditPage={editPageRef}
                                      chip={chip}
                                      VisiblePinTitles={props.VisiblePinTitles}
                                      updateAll={updateAll}
                                  />
                              )
                          )
                        : undefined}
                </div>
            </div>
            <div className={cl.OutputPins}>
                {chipLoaded
                    ? OutputPins.map((pin) => (
                          <div>
                              <EditPageOutPin
                                  Pin={pin}
                                  VisiblePinTitles={props.VisibleAllPinTitles}
                                  updateAll={updateAll}
                              />
                          </div>
                      ))
                    : undefined}
            </div>
        </div>
    );
};

export default EditChip;
