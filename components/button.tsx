import React from 'react';
import { Pressable } from 'react-native';

interface Props {
    border: number;
    color: string;
    borderColor?: string;
    children?: React.ReactNode;
    height: number;
    onPress: () => void;
    width: number;
    radius: number;
    position?: 'absolute' | 'relative';
    bottom?: number;
    right?: number;
    justifyContent?: 'center' | 'flex-start' | 'flex-end';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
}

const BackToLocationButton: React.FC<Props> = ({
    border,
    borderColor,
    color,
    radius,
    height,
    onPress,
    width,
    children,
    position,
    justifyContent,
    alignItems,
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={{
                borderWidth: border,
                borderColor: borderColor,
                backgroundColor: color,
                borderRadius: radius,
                height: height,
                width: width,
                position: position,
                bottom: position === 'absolute' ? 20 : undefined,
                right: position === 'absolute' ? 20 : undefined,
                justifyContent: justifyContent,
                alignItems: alignItems,
            }}
        >
            {children}
        </Pressable>
    )
}

export default BackToLocationButton;