export const blogsData = [
  {
    slug: "practical-helpdesk-notes",
    title: "Practical Helpdesk Fundamentals (TCM Security Notes)",
    date: "2026-02-10",
    description:
      "My structured notes from TCM Security’s Practical Helpdesk course covering IT roles, responsibilities, and real-world helpdesk tasks.",
    content: `
# Practical Helpdesk Fundamentals

These are my summarized notes from **TCM Security's Practical Helpdesk course**.  
The course focuses on IT roles, responsibilities, and real-world technical support workflows.

---

## What is IT?

**Information Technology (IT)** is a broad term used for different roles and groups of technologies.  
The main role of IT is to **manage and support technology required for an organization to function smoothly**.

---

## Core Responsibilities of IT

### 1. Technical Support
- Supporting employees with technical issues
- Training users and setting up systems

### ### 2. Security
- Cybersecurity and physical security
- Protecting systems, data, and infrastructure

### 3. Data Management
- Managing access to data
- Ensuring proper data handling

---

## IT Roles and Job Positions

### IT Director
- Oversees large IT projects and strategy

### IT Manager
- Manages IT staff and operations

### Network Engineer / Administrator
- Maintains routers, switches, and network infrastructure

### System Administrator
- Manages servers, upgrades, and assets

### Application Roles
- Application Manager
- Database Administrator
- Solution Architect

### Project Manager
- Planning, budgeting, documentation, resource allocation

---

## Helpdesk Role (Entry-Level IT Job)

### Responsibilities
- Troubleshooting hardware/software issues
- Password resets
- Installing and fixing hardware
- Customer communication
- Escalation to higher-level teams
- Ticket documentation

---

# How Computers Work (Basic Hardware)

## Transistors & Logic Gates
- Computers use **billions of transistors**
- Logic gates process binary (0 and 1)

---

## Number Systems
- Decimal (Base 10)
- Binary (Base 2)
- Hexadecimal (Base 16)

---

## Bits & Bytes
- Bit = 0 or 1  
- Byte = 8 bits  
- Nibble = 4 bits  

---

## ASCII Encoding
- Converts characters into binary values

---

## Key Takeaway
Understanding hardware and IT roles is essential for cybersecurity and technical support careers.
`
  },

  // ========================= NEW BLOG SECTION ========================= //

  {
    slug: "laptop-desktop-components-helpdesk",
    title: "Laptop & Desktop Components Installation and Replacement (Helpdesk Notes)",
    date: "2026-02-12",
    description:
      "Practical helpdesk notes on replacing and installing laptop and desktop components with troubleshooting ticket examples.",
    content: `
# Laptop & Desktop Components Installation & Replacement

These notes are part of **Practical Helpdesk Fundamentals** and focus on real-world hardware handling.

---

# Electrostatic Discharge (ESD) Safety

**ESD can permanently damage computer components.**

## How to Prevent ESD
- Use an **ESD wrist strap**
- Use an **ESD mat**
- Work on **ESD-resistant surfaces**
- Touch only the **edges of components**
- Touch the **metal case** to discharge static electricity

---

# CPU Installation (Desktop)

## Steps
1. Open CPU socket lever
2. Align the triangle marker on CPU with motherboard socket
3. Place CPU gently (do not force)
4. Apply **thermal paste**
5. Install CPU cooler and connect fan cable

---

# RAM Installation

## DDR RAM Types
- DDR3
- DDR4
- DDR5  
**Always check motherboard compatibility**

## Steps
1. Open RAM slot clips
2. Align notch with slot
3. Push until clips lock

---

# Storage Devices

## Types
- HDD (Hard Disk Drive)
- SSD (Solid State Drive)
- NVMe SSD (M.2)

## SATA Connector
- Used for HDD and SATA SSD
- Requires power + data cable

---

# Power Supply Unit (PSU)

## Notes
- Higher efficiency PSU = less heat
- Always unplug PSU before opening PC
- Do NOT open PSU internally (dangerous)
- Check PSU switch position (ON/OFF)

---

# Motherboard (MOBO) Notes

- Clear CMOS to reset BIOS settings
- Identify ports and connectors
- Label cables while assembling

---

# Common Hardware Troubleshooting Ticket Example

## Ticket Example: Computer Will Not Power On

### Steps to Troubleshoot
1. Check power cable is plugged in
2. Check PSU switch is ON
3. Test wall socket or power bar
4. Check motherboard power connectors
5. Reset CMOS battery
6. Test with known working PSU
7. Replace motherboard if needed

---

# Real Helpdesk Scenario Example

**User Ticket:**  
> "My desktop is not turning on. No display and no fan noise."

### Technician Action Plan:
- Verify power source and cable
- Check PSU switch and voltage selector
- Reseat RAM and power connectors
- Test with spare PSU
- Escalate if motherboard is faulty

---

## Key Takeaway

Helpdesk technicians must understand **hardware installation, ESD safety, and structured troubleshooting workflows**.  
Documenting every step in tickets is critical for IT operations.
`
  }
];
