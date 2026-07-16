"use strict";
"require baseclass";

return baseclass.extend({
  title: _("Battery"),

  rrdargs(graph, host, plugin, plugin_instance, dtype) {
    return [
      {
        title: "Battery voltage",
        vlabel: "Voltage",
        alt_autoscale: true,
        data: {
          instances: {
            gauge: ["voltage"],
          },
          options: {
            gauge_voltage: { title: "V" },
          },
        },
      },
      {
        title: "Remaining charge",
        vlabel: "% remaining",
        y_min: "0",
        y_max: "100",
        data: {
          instances: {
            percent: ["remaining"],
          },
          options: {
            percent_remaining: { title: "%" },
          },
        },
      },
      {
        title: "Battery health",
        vlabel: "Health",
        y_min: "0",
        y_max: "100",
        rigid: true,
        data: {
          instances: {
            percent: ["health"],
          },
          options: {
            percent_health: { title: "%" },
          },
        },
      },
    ];
  },
});
