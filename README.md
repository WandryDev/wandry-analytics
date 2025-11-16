![Wandry Analytics Hero](public/hero.png)

# Wandry Analytics

## Description

Wandry Analytics is a comprehensive analytics dashboard designed specifically for component registries. The system enables registry maintainers to track, analyze, and visualize installation and usage statistics for their published components. It provides insights into which components are most popular, how frequently they are installed, and from which geographic locations developers are accessing them.

The platform automatically collects and processes anonymous installation data from registries, transforming raw events into meaningful visualizations and reports. All data collection respects user privacy by maintaining complete anonymity and avoiding any personal information tracking.

## Goals

The primary objective of Wandry Analytics is to empower component registry maintainers with actionable insights about their component libraries. The system aims to help developers understand:

- Component popularity and usage patterns
- Installation trends over time (daily, weekly, monthly, and total statistics)
- Geographic distribution of installations
- Component-level analytics to identify which components are most frequently used

By providing these insights, registry maintainers can make data-driven decisions about which components to prioritize for maintenance, enhancement, or documentation improvements. The platform also helps identify emerging trends and patterns in component adoption.

## Purpose

Wandry Analytics exists to bridge the gap between component creation and understanding actual usage. Many registry maintainers publish components without visibility into how those components are being used in real-world applications. This platform addresses that challenge by:

- Offering a straightforward way to integrate analytics tracking into existing registries
- Providing a centralized dashboard where maintainers can view statistics for all their registries
- Enabling comparison of component performance across different time periods
- Supporting multiple registries per account, allowing maintainers to manage multiple component libraries from a single interface

The system uses API-based event tracking, where registries send installation events to the analytics service. These events are processed, aggregated, and presented through an intuitive dashboard interface that makes complex data accessible and actionable.

## Who Can Use It

Wandry Analytics is designed for several types of users:

**Component Registry Maintainers**: Developers who maintain component registries, particularly those using shadcn-style registry structures, can integrate analytics tracking to monitor their component libraries' usage and adoption.

**Open Source Contributors**: Developers contributing to open source component libraries who want to understand the impact and reach of their contributions can use the platform to track installation statistics.

**Development Teams**: Teams managing internal or public component registries can leverage the analytics to make informed decisions about component prioritization, maintenance schedules, and resource allocation.

**Component Library Authors**: Individual developers or organizations publishing reusable components can gain insights into which components resonate most with their user base, helping guide future development efforts.

The platform is suitable for both public registries with widespread adoption and private registries used within organizations. It scales to accommodate registries of any size, from small personal projects to large enterprise component libraries.
