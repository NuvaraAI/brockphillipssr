# SOHO departmental network

**Cisco Packet Tracer simulation · Network design and documented gateway checks**

[← Project index](README.md) · [Infrastructure work](cybertex-infrastructure.md)

A departmental network needs logical separation and a clear path to shared network services. This project models that problem in Cisco Packet Tracer.

## My contribution

I developed the simulated network design and presentation, using AI assistance to organize and document the work. The project connects the topology to a subnet plan and observable gateway tests.

## Design

- Cisco 2911 router and Cisco 2960 switch.
- Three departmental VLANs and a /26 subnet plan.
- A trunk link with router-on-a-stick routing.
- DHCP address planning for departmental PCs and wireless devices.

![Sanitized conceptual diagram of the three departmental VLANs and their gateway checks](../assets/soho-network.png)

*Portfolio diagram reconstructed from the reviewed project design. It is an illustration, not a Packet Tracer screenshot or a new test run.*

## Evidence and status

Three embedded Packet Tracer screenshots in the retained presentations show gateway ping results: **four packets sent, four received, zero lost**, one check per departmental PC/gateway.

Those screenshots support gateway reachability in the simulation. They do not independently establish all DHCP behavior, inter-VLAN client-to-client communication, security isolation, or a real-world company deployment.

**Skills demonstrated:** VLAN design, subnet planning, trunking, routing concepts, DHCP planning, simulation documentation, test-scope interpretation.

[Evidence guide](../evidence/README.md)
