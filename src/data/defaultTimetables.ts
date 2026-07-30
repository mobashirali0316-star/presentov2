export interface DefaultSubject {
  name: string;
  code: string;
  type: "THEORY" | "PRACTICAL";
}

export interface DefaultSlot {
  subjectCode: string;
  dayOfWeek: number; // Mon:1, Tue:2, Wed:3, Thu:4, Fri:5, Sat:6
  sequenceOrder: number; // 0-based sequential index per day
}

export interface DefaultTimetable {
  id: string;
  sectionName: string;
  subjects: DefaultSubject[];
  timetable: DefaultSlot[];
}

export const defaultTimetables: DefaultTimetable[] = [
  {
    id: "section-f",
    sectionName: "Section F",
    subjects: [
      { name: "BAS 301", code: "BAS 301", type: "THEORY" },
      { name: "BCS 301", code: "BCS 301", type: "THEORY" },
      { name: "BCS 302", code: "BCS 302", type: "THEORY" },
      { name: "BCS 303", code: "BCS 303", type: "THEORY" },
      { name: "Python Programming", code: "BCC 302", type: "THEORY" },
      { name: "BOE 310", code: "BOE 310", type: "THEORY" },
      { name: "TVA 303", code: "TVA 303", type: "THEORY" },
      { name: "TQA 301", code: "TQA 301", type: "THEORY" },
      { name: "BCS 351 Lab", code: "BCS 351", type: "PRACTICAL" },
      { name: "BCS 352 Lab", code: "BCS 352", type: "PRACTICAL" },
      { name: "BCS 353 Lab", code: "BCS 353", type: "PRACTICAL" },
      { name: "BCC 351 Lab", code: "BCC 351", type: "PRACTICAL" },
      { name: "Python Programming Lab", code: "PYTHON_LAB", type: "PRACTICAL" }
    ],
    timetable: [
      // Monday
      { subjectCode: "BAS 301", dayOfWeek: 1, sequenceOrder: 0 },
      { subjectCode: "BCS 303", dayOfWeek: 1, sequenceOrder: 1 },
      { subjectCode: "BCS 352", dayOfWeek: 1, sequenceOrder: 2 },
      // Slot 4 is empty (—)
      { subjectCode: "BCC 302", dayOfWeek: 1, sequenceOrder: 3 },
      { subjectCode: "BOE 310", dayOfWeek: 1, sequenceOrder: 4 },
      { subjectCode: "BCS 301", dayOfWeek: 1, sequenceOrder: 5 },

      // Tuesday
      { subjectCode: "BAS 301", dayOfWeek: 2, sequenceOrder: 0 },
      { subjectCode: "TVA 303", dayOfWeek: 2, sequenceOrder: 1 },
      { subjectCode: "BCS 301", dayOfWeek: 2, sequenceOrder: 2 },
      { subjectCode: "BCC 302", dayOfWeek: 2, sequenceOrder: 3 },
      { subjectCode: "BCS 303", dayOfWeek: 2, sequenceOrder: 4 },
      { subjectCode: "BCS 302", dayOfWeek: 2, sequenceOrder: 5 },
      { subjectCode: "BCS 302", dayOfWeek: 2, sequenceOrder: 6 },

      // Wednesday
      { subjectCode: "BAS 301", dayOfWeek: 3, sequenceOrder: 0 },
      { subjectCode: "BCC 302", dayOfWeek: 3, sequenceOrder: 1 },
      { subjectCode: "BCS 301", dayOfWeek: 3, sequenceOrder: 2 },
      { subjectCode: "BCS 302", dayOfWeek: 3, sequenceOrder: 3 },
      { subjectCode: "BOE 310", dayOfWeek: 3, sequenceOrder: 4 },
      { subjectCode: "BCC 351", dayOfWeek: 3, sequenceOrder: 5 },
      // Slot 7 is empty (—)

      // Thursday
      { subjectCode: "BCS 301", dayOfWeek: 4, sequenceOrder: 0 },
      { subjectCode: "BOE 310", dayOfWeek: 4, sequenceOrder: 1 },
      { subjectCode: "BCC 302", dayOfWeek: 4, sequenceOrder: 2 },
      { subjectCode: "BCS 302", dayOfWeek: 4, sequenceOrder: 3 },
      { subjectCode: "TQA 301", dayOfWeek: 4, sequenceOrder: 4 },
      { subjectCode: "BCS 302", dayOfWeek: 4, sequenceOrder: 5 },
      { subjectCode: "BCS 303", dayOfWeek: 4, sequenceOrder: 6 },

      // Friday
      { subjectCode: "BOE 310", dayOfWeek: 5, sequenceOrder: 0 },
      { subjectCode: "BCS 303", dayOfWeek: 5, sequenceOrder: 1 },
      { subjectCode: "BCS 353", dayOfWeek: 5, sequenceOrder: 2 },
      { subjectCode: "BCS 303", dayOfWeek: 5, sequenceOrder: 3 },
      { subjectCode: "PYTHON_LAB", dayOfWeek: 5, sequenceOrder: 4 },
      { subjectCode: "BCC 302", dayOfWeek: 5, sequenceOrder: 5 },
      { subjectCode: "BCS 301", dayOfWeek: 5, sequenceOrder: 6 },

      // Saturday
      { subjectCode: "BCS 351", dayOfWeek: 6, sequenceOrder: 0 },
      { subjectCode: "BCS 351", dayOfWeek: 6, sequenceOrder: 1 },
      { subjectCode: "BOE 310", dayOfWeek: 6, sequenceOrder: 2 },
      { subjectCode: "BCS 303", dayOfWeek: 6, sequenceOrder: 3 },
      { subjectCode: "BCS 301", dayOfWeek: 6, sequenceOrder: 4 },
      { subjectCode: "BCS 302", dayOfWeek: 6, sequenceOrder: 5 },
      { subjectCode: "BCS 303", dayOfWeek: 6, sequenceOrder: 6 }
    ]
  }
];
