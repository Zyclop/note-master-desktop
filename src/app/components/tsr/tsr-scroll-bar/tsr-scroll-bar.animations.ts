import {
    animate,
    state,
    style,
    transition,
    trigger,
    AnimationTriggerMetadata,
} from '@angular/animations';

/** Time and timing curve for drop down animations. */
export const SCROLL_BAR_ANIMATION_TIMING_IN = '225ms cubic-bezier(0.4,0.0,0.2,1)';
export const SCROLL_BAR_ANIMATION_TIMING_OUT = '1s cubic-bezier(0.4,0.0,0.2,1)';

export const tsrScrollBarAnimations: {
    readonly scrollBarThumb: AnimationTriggerMetadata;
} = {
    /** Animation that expands and collapses the drop down content. */
    scrollBarThumb: trigger('scrollBarThumb', [
        state('hidden, void', style({ opacity: '0' })),
        state('visible', style({ opacity: '1' })),
        transition('hidden => visible, void => collapsed', animate(SCROLL_BAR_ANIMATION_TIMING_IN)),
        transition('visible => hidden', animate(SCROLL_BAR_ANIMATION_TIMING_OUT)),
    ])
};
