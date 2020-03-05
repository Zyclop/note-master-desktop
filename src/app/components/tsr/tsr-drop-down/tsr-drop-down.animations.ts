import {
    animate,
    state,
    style,
    transition,
    trigger,
    AnimationTriggerMetadata,
} from '@angular/animations';

/** Time and timing curve for drop down animations. */
export const DROP_DOWN_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';

export const tsrDropDownAnimations: {
    readonly indicatorRotate: AnimationTriggerMetadata;
    readonly bodyDropDown: AnimationTriggerMetadata;
} = {
    /** Animation that rotates the indicator arrow. */
    indicatorRotate: trigger('indicatorRotate', [
        state('collapsed, void', style({ transform: 'rotate(-90deg)' })),
        state('expanded', style({ transform: 'rotate(0deg)' })),
        transition('expanded <=> collapsed, void => collapsed',
            animate(DROP_DOWN_ANIMATION_TIMING)),
    ]),

    /** Animation that expands and collapses the drop down content. */
    bodyDropDown: trigger('bodyDropDown', [
        state('collapsed, void', style({ height: '0px' })),
        state('expanded', style({ height: '*' })),
        transition('expanded <=> collapsed, void => collapsed',
            animate(DROP_DOWN_ANIMATION_TIMING)),
    ])
};
