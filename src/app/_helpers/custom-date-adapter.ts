// File for customising  calendar and data for Estonian needs

import { NativeDateAdapter } from '@angular/material';
// for calendar to start on Monday
export class CustomDateAdapter extends NativeDateAdapter {
    getFirstDayOfWeek(): number {
        return 1;
       }
} 