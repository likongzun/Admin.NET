﻿namespace Admin.NET.Core;

/// <summary>
/// 常量下拉框特性
/// </summary>
[SuppressSniffer]
[AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
public class ConstSelectorAttribute : Attribute
{
    public string Name { get; set; }

    public ConstSelectorAttribute(string name)
    {
        Name = name;
    }
}