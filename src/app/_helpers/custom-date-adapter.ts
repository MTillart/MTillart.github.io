// File for customising  calender and data for Estonian needs

import { NativeDateAdapter } from '@angular/material';
// for calender to start on Monday
export class CustomDateAdapter extends NativeDateAdapter {
    getFirstDayOfWeek(): number {
        return 1;
       }
} 