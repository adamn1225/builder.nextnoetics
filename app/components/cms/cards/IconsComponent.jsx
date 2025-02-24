import React from 'react';
import { useNode } from "@craftjs/core";
import { BeakerIcon, AcademicCapIcon, AdjustmentsIcon } from '@heroicons/react/solid';

const iconList = {
    BeakerIcon,
    AcademicCapIcon,
    AdjustmentsIcon,
    // Add more icons as needed
};

export const IconsComponent = ({ icon = 'BeakerIcon', iconSize = 64, iconColor = '#000', ...props }) => {
    const { connectors: { connect, drag } } = useNode();
    const IconComponent = iconList[icon];

    return (
        <div ref={ref => connect(drag(ref))} {...props}>
            {IconComponent && <IconComponent style={{ width: `${iconSize}px`, height: `${iconSize}px`, color: iconColor }} />}
        </div>
    );
};

export const IconsSettings = () => {
    const { actions: { setProp }, icon, iconSize, iconColor } = useNode((node) => ({
        icon: node.data.props.icon,
        iconSize: node.data.props.iconSize,
        iconColor: node.data.props.iconColor,
    }));

    return (
        <div className="mt-2">
            <form className="flex flex-col space-y-2 w-fit border border-gray-200 p-2 rounded-md bg-white">
                <label className="font-semibold text-sm underline">Icon</label>
                <select
                    value={icon}
                    onChange={(e) => setProp((props) => props.icon = e.target.value)}
                    className="w-full"
                >
                    {Object.keys(iconList).map((iconKey) => (
                        <option key={iconKey} value={iconKey}>{iconKey}</option>
                    ))}
                </select>
                <label className="font-semibold text-sm underline">Icon Size</label>
                <input
                    type="number"
                    value={iconSize}
                    onChange={(e) => setProp((props) => props.iconSize = e.target.value)}
                    className="w-full"
                />
                <label className="font-semibold text-sm underline">Icon Color</label>
                <input
                    type="color"
                    value={iconColor}
                    onChange={(e) => setProp((props) => props.iconColor = e.target.value)}
                    className="w-full"
                />
            </form>
        </div>
    );
};

IconsComponent.craft = {
    props: {
        icon: 'BeakerIcon',
        iconSize: 64,
        iconColor: '#000',
    },
    related: {
        settings: IconsSettings,
    },
    rules: {
        canMoveIn: () => {
            return true; // Allow any node to move in
        },
        canMoveOut: () => {
            return true; // Allow any node to move out
        },
        canDrag: () => {
            return true; // Allow dragging
        },
        canDrop: () => {
            return true; // Allow dropping
        }
    }

};